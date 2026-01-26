// app/users/loading.js
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <div>
      {Array(5).fill(0).map((_, i) => (
        <Skeleton key={i} height={50} width="100%" style={{ marginBottom: '1rem' }} />
      ))}
    </div>
  );
}
