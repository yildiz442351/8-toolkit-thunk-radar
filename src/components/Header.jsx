import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="public/plane-1.png" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {state.isLoading
          ? 'Uçuşlar Hesaplanıyor...'
          : state.isError
          ? 'Bir hata oluştur :('
          : state.flights.length + ' Uçuş Bulundu'}
      </p>
    </header>
  );
};

export default Header;