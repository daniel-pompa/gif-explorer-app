interface Props {
  title: string;
  description?: string;
}

export const Header = ({ title, description }: Props) => (
  <header className='content-center'>
    <h1 className='inter-bold'>{title}</h1>
    {description && <p className='inter-light'>{description}</p>}
  </header>
);
