import { useQuery } from 'react-query';

const useProducts = () => {
    const {
        data: products,
        isLoading,
        error,
        refetch,
    } = useQuery('products', () =>
        fetch(`https://carpenco-server.herokuapp.com/products`).then((res) => res.json())
    );
    return [products, isLoading, error, refetch];
};

export default useProducts;
