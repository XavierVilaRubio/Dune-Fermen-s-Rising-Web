export default function SectionSubtitle(props) {
  return (
    <h3 className="mt-10 mb-2 text-3xl font-bold text-orange-600 underline">
      {props.children}
    </h3>
  );
}
