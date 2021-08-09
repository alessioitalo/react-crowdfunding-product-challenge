import styled from "styled-components";
import bookmarkLogo from "../images/icon-bookmark.svg";
import bookmarkLogoActive from "../images/icon-bookmark-copy.svg";
import React, { useState } from "react";

const StyledBookmark = styled.span`
  display: flex;
  cursor: pointer;
  border-radius: 50px;
  background: hsl(0, 0%, 96%);

  & .bookmark-img {
    display: inline-block;
    position: relative;
    top: 0;
    margin: 0;
    width: 3rem;
  }

  & p {
    margin: 0;
    align-self: center;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${(props) =>
      props.bookmarked ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 48%)"};
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

function Bookmark(props) {
  const [bookmarked, setBookmarked] = useState(false);
  const bookmarkHandler = () => {
    if (!bookmarked) {
      setBookmarked(true);
      return;
    }
    setBookmarked(false);
  };

  return (
    <StyledBookmark bookmarked={bookmarked} onClick={bookmarkHandler}>
      <img
        src={bookmarked ? bookmarkLogoActive : bookmarkLogo}
        className="bookmark-img"
        alt="bookmark-icon"
      />
      <p>{bookmarked ? "Bookmarked" : "Bookmark"}</p>
      {/* <img src={bookmarkLogoActive} className='bookmark-img' alt="bookmark-icon" /> */}
    </StyledBookmark>
  );
}

export default Bookmark;
