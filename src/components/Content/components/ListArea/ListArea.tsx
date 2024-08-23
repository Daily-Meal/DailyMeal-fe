import List from "./List/List";
import * as S from "./ListArea.style";
import { useEffect, useState } from "react";
import {
  getFavoritesBoards,
  getFilteredBoards,
  getMyBoards,
  getUserBoards,
} from "@/api/getBoards.api";
import {
  BoardInfo,
  BoardsInfo,
  Filters,
  RequestBoard,
} from "@/models/boardInfo.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { deletePost } from "@/api/boards.api";
import { useListStore } from "@/stores/listStore";

const ITEM_LIMIT = 8;

interface ListAreaProps {
  category: Filters;
}

type ApiFunction = (data: RequestBoard) => Promise<BoardsInfo>;

export default function ListArea({ category }: ListAreaProps) {
  const navigate = useNavigate();
  const [boards, setBoards] = useState<BoardInfo[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  let isFetching = false;
  const { setDatas, setHeaderTotal, decreaseHeaderTotal } = useListStore();

  const { accessToken } = useAuthStore();
  const [favorites, setFavorites] = useState<string[]>([]);

  const currentPath = useLocation().pathname;
  const regex = new RegExp("^/user");

  const userId = parseInt(currentPath.split("/").slice(-1).join());

  let selectedApi: ApiFunction;
  switch (currentPath) {
    case "/":
      selectedApi = getFilteredBoards;
      break;
    case "/favorites":
      selectedApi = getFavoritesBoards;
      break;
    case "/mypage":
      selectedApi = getMyBoards;
      break;
    default:
      // 특정 사용자의 게시글 조회 /user/{userId}
      if (regex.test(currentPath) && userId) {
        selectedApi = getUserBoards;
      } else {
        navigate("/");
      }
  }

  const isFavoriteList = (list: BoardInfo): boolean => {
    return favorites.some(favorite => {
      return favorite === list.board_id;
    });
  };

  const handleDelete = async (boardId: string) => {
    try {
      await deletePost(boardId);
      setBoards(prevBoards =>
        prevBoards.filter(board => board.board_id !== boardId),
      );
      decreaseHeaderTotal();
    } catch (error) {
      console.error("게시물 삭제 오류", error);
    }
  };

  const fetchData = async (isFirstFetch: boolean = false) => {
    if (isFetching) return;
    isFetching = true;
    try {
      const data: RequestBoard = {
        limit: ITEM_LIMIT,
        offset,
        category,
        userId: userId.toString(),
      };
      const responseData = await selectedApi(data);
      setDatas(responseData);
      setHeaderTotal(responseData.pagination.total);

      if (accessToken) {
        // 즐겨찾기 boardId 조회
        const favoritesData = await getFavoritesBoards({
          limit: ITEM_LIMIT,
          offset,
        });
        favoritesData.boards.forEach(favoriteData => {
          setFavorites(prev => [...prev, favoriteData.board_id]);
        });
      }

      if (responseData) {
        if (responseData.boards.length < 8) {
          setHasMore(false);
        }
        setOffset(prev => prev + ITEM_LIMIT);
        if (isFirstFetch) {
          setBoards(responseData.boards);
        } else {
          setBoards(prev => [...prev, ...responseData.boards]);
        }
      }
    } catch (error) {
      console.error("데이터 조회 에러", error);
    } finally {
      isFetching = false;
    }
  };

  useEffect(() => {
    fetchData(true);
  }, []);

  useEffect(() => {
    const itemContainer = document.querySelector(".itemContainer");

    if (hasMore && itemContainer) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              fetchData(false);
            }
          });
        },
        {
          root: itemContainer,
          threshold: 0.8,
        },
      );

      const targetElement =
        itemContainer.children[itemContainer.children.length - 4];

      if (targetElement) {
        observer.observe(targetElement);
      }

      if (!hasMore) {
        observer.disconnect();
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [boards]);

  return (
    <>
      {boards.length > 0 ? (
        <S.ListAreaStyle>
          <div className="itemContainer">
            {boards.map(list => (
              <List
                key={list.board_id}
                category={list.category}
                created_at={list.created_at}
                meals={list.meals}
                board_id={list.board_id}
                meal_type={list.meal_type}
                tags={list.tags}
                user={list.user}
                image={list.image}
                isFavorite={isFavoriteList(list)}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </S.ListAreaStyle>
      ) : (
        <S.NoContentWrapper>
          <S.NoContentStyle />
          <S.NoContentText>
            <p>게시물이 없습니다.</p> <br />
            게시물을 작성해주세요.
          </S.NoContentText>
        </S.NoContentWrapper>
      )}
    </>
  );
}
