type Props = {
  title: string;
  subtitle?: string;
  id?: string;
};

export default function SectionTitleView({ title, subtitle, id }: Props) {
  return (
    <header className="section-header">
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
