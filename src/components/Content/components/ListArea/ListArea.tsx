import { useListStore } from "@/stores/listStore";
import List from "./List/List";
import * as S from "./ListArea.style";
import { useCallback, useEffect, useRef, useState } from "react";

const useIntersection = (options: IntersectionObserverInit) => {
  const [intersection, setIntersection] =
    useState<IntersectionObserverEntry | null>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const captureIntersectionElement = useCallback(
    (element: HTMLElement | null) => {
      element && setElement(element);
    },
    [],
  );

  useEffect(() => {
    if (element == null || typeof IntersectionObserver !== "function") return;

    const handler = (entries: IntersectionObserverEntry[]) => {
      setIntersection(entries[0]);
    };
    const observer = new IntersectionObserver(handler, options);
    observer.observe(element);

    return () => {
      setIntersection(null);
      observer.disconnect();
    };
  }, [options, element]);

  return { captureIntersectionElement, element, intersection };
};

export default function ListArea() {
  const { captureIntersectionElement, intersection, element } = useIntersection(
    {
      threshold: 0,
    },
  );

  const { lists, setDatas } = useListStore();

  // `HTMLDivElement` 타입을 명시하여 containerRef.current가 HTMLElement임을 보장
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setLoading(false);

      const { intersectionRect } = intersection;

      containerRef.current?.scrollTo({
        top: 0,
      });
    }
  }, [intersection, loading]);

  return (
    <>
      {lists.length > 0 ? (
        <S.ListAreaStyle>
          <div className="itemContainer" ref={containerRef}>
            {lists.map(list => (
              <List
                key={list.id}
                category={list.category}
                created_at={list.created_at}
                food_name={list.food_name}
                id={list.id}
                meal_type={list.meal_type}
                tag_name={list.tag_name}
                user_id={list.user_id}
                url={list.url}
              />
            ))}
            <div
              className="infiniteScrollArea"
              ref={captureIntersectionElement}
            >
              adsf
            </div>
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
