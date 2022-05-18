const content = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, possimus.",
    image: "https://picsum.photos/400/200",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, possimus.",
    image: "https://picsum.photos/400/200",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, possimus.",
    image: "https://picsum.photos/400/200",
  },
];

export default function handler(req, res) {
  res.status(200).json(content);
}
