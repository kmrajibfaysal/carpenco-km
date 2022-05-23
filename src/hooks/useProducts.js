import { useQuery } from 'react-query';

const useProducts = () => {
    const {
        isLoading,
        error,
        data: products,
        refetch,
    } = useQuery('products', () =>
        fetch(`http://localhost:5000/products`).then((res) => res.json())
    );
    return [products, isLoading, error, refetch];
};

export default useProducts;
