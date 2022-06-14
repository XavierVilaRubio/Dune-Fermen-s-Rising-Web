export default function SectionTitle(props) {
  return (
    <h2 className="mt-4 text-4xl font-bold text-orange-500 md:text-5xl">
      {props.children}
    </h2>
  );
}
