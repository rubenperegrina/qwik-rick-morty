import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <Link href={`/`}>
          <QwikLogo />
        </Link>
      </div>
    </header>
  );
});
