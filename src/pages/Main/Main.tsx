import { useEffect, useState } from "react";
import { CreateButton, FilterButton } from "./components/Button";
import { ButtonsWrapper } from "./components/Button/Button.style";
import ListArea from "./components/ListArea";
import { useListStore } from "@/store/listStore";
import MainContent from "@/layout/mainContent";
import { useLocation } from "react-router-dom";

export default function Main() {
  const [selectedFilter, setSelectedFilter] = useState<Filters>("전체");
  const { lists, setDatas } = useListStore();

  // 백엔드 - 조회 API 추가 예정
  useEffect(() => {
    setDatas(TEST_DIET_DATA, true);
  }, [setDatas]);

  const handleFilterClick = (filterName: Filters) => {
    setSelectedFilter(filterName);
  };

  return (
    <MainContent>
      <ButtonsWrapper>
        <div>
          {FILTERS.map(filter => {
            return (
              <FilterButton
                key={filter.id}
                name={filter.name}
                isSelected={selectedFilter === filter.name}
                onClick={() => handleFilterClick(filter.name as Filters)}
              ></FilterButton>
            );
          })}
        </div>
        <div>
          <CreateButton />
        </div>
      </ButtonsWrapper>
      <ListArea />
    </MainContent>
  );
}

type Filters = "전체" | "아침" | "점심" | "저녁";

const FILTERS = [
  {
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "아침",
  },
  {
    id: 3,
    name: "점심",
  },
  {
    id: 4,
    name: "저녁",
  },
];

const TEST_DIET_DATA = [
  {
    id: "1",
    created_at: "1011-01-01",
    user_id: "user_id1",
    category: "아침",
    meal_type: "중식",
    food_name: ["음식1", "음식2", "음식3", "음식4", "음식5", "음식6"],
    tag_name: ["태그1", "태그2", "태그3"],
  },
  {
    id: "2",
    created_at: "2022-02-02",
    user_id: "user_id2",
    category: "점심",
    meal_type: "한식",
    food_name: ["음식1", "음식2", "음식3"],
    tag_name: ["태그1", "태그2", "태그3"],
  },
  {
    id: "3",
    created_at: "3033-03-03",
    user_id: "user_id3",
    category: "저녁",
    meal_type: "일식",
    food_name: ["음식1", "음식2", "음식3"],
    tag_name: ["태그1", "태그2", "태그3"],
  },
  {
    id: "4",
    created_at: "4044-04-04",
    user_id: "user_id4",
    category: "아침",
    meal_type: "기타",
    food_name: ["음식1", "음식2", "음식3"],
    tag_name: ["태그1", "태그2", "태그3"],
  },
  {
    id: "5",
    created_at: "5055-05-05",
    user_id: "user_id5",
    category: "점심",
    meal_type: "양식",
    food_name: ["음식1", "음식2", "음식3"],
    tag_name: ["태그1", "태그2", "태그3", "태그4", "태그5"],
  },
];
