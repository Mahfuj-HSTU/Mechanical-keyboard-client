import MainLayout from './components/layout/MainLayout';
import useReloadWarning from './hooks/useReloadWarning';
import { selectCartItems } from './redux/redux/features/cartSlice';
import { useAppSelector } from './redux/redux/hooks';

function App() {
  const cartItems = useAppSelector(selectCartItems);
  const isCartNotEmpty = cartItems.length > 0;

  useReloadWarning(isCartNotEmpty);

  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
