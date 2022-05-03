import AppContext from '../app/AppContext';
import AppTheme from '../app/AppTheme';
import AppLayout from '../app/AppLayout';

export default function App({ Component }) {
  return (
    <AppContext>
      <AppTheme>
        <AppLayout>
          <Component />
        </AppLayout>
      </AppTheme>
    </AppContext>
  );
}
