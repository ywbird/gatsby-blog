import React from 'react';
import styled from 'styled-components';

interface TOC {
  url: string;
  title: string;
  items?: TOC[];
}

interface TableOfContentProps {
  toc: { items: TOC[] };
  className?: string;
}

const TocItemLi = styled.li`
  list-style-type: none;
  a {
    color: black;
    text-decoration: none;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: gray;
    }
    font-size: 13px;
    word-wrap: break-word;
    word-break: normal;
  }
  @media (max-height: 700px) {
    height: 700px;
    overflow: auto;
  }
  /* margin-bottom: 100px; */
`;

const TocItemUl = styled.ul`
  padding-left: 15px;
`;

const TOC = styled.aside`
  width: 220px;
  /* height: 800px; */
  overflow: auto;
  display: none;
  scrollbar-width: thin;
  scrollbar-color: lightgray rgba(0, 0, 0, 0);
  @media (min-width: 1400px) {
    display: block;
    position: fixed;
    left: 50%;
    top: 140px;
    /* right: 250px; */
    transform: translateX(450px);
  }
  border-left: 2px solid gray;
  padding-left: 10px;
`;

const renderTableOfContentItems = (items: TOC[]) => {
  return (
    <TocItemUl>
      {items &&
        items.map(({ url, title, items }) => (
          <TocItemLi key={url}>
            <a href={url}>{title}</a>
            {items && items.length && renderTableOfContentItems(items)}
          </TocItemLi>
        ))}
    </TocItemUl>
  );
};

const TableOfContent: React.FC<TableOfContentProps> = ({ toc, className }) => (
  <TOC className={className}>
    {/* <TOCTitle>Table of contents</TOCTitle> */}
    {renderTableOfContentItems(toc.items)}
  </TOC>
);

export default TableOfContent;
