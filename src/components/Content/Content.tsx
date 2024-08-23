import { useEffect, useRef, useState } from "react";
import { CreateButton, FilterButton } from "./components/Button";
import { ButtonsWrapper } from "./components/Button/Button.style";
import ListArea from "./components/ListArea";
import MainContent from "@/layout/mainContent";
import { Filters, RequestBoard } from "@/models/boardInfo.model";

export default function Content() {
  const [selectedFilter, setSelectedFilter] = useState<Filters>("전체");

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
      <ListArea key={selectedFilter} category={selectedFilter} />
    </MainContent>
  );
}

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
