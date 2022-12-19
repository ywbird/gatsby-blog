import { IPost } from '@/global';
import { useState, useEffect, useRef, FC } from 'react';

import Article from '../article';

import './postList.scss';

interface props {
  posts: IPost[];
}

const PostList: FC<props> = ({ posts }) => {
  const [list, setList] = useState<IPost[]>([...posts.slice(0, 10)]);

  const [loadMore, setLoadMore] = useState(false);

  const [hasMore, setHasMore] = useState(posts.length > 10);

  const loadRef = useRef<HTMLDivElement | null>(null);

  const handleObserver: IntersectionObserverCallback = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setLoadMore(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `20px`,
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadRef.current) {
      observer.observe(loadRef.current);
    }
  }, []);

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < posts.length;
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 10)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  // Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
    <div className="post-list">
      <div className="post-grid">
        {list.map((post) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
      <div className="condition" ref={loadRef}>
        {hasMore ? <p>Loading...</p> : <p>No more posts</p>}
      </div>
    </div>
  );
};

export default PostList;
