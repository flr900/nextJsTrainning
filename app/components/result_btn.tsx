interface propsBtn {
  name: string;
  className?: string;
}

export default function ResultBtn(props: propsBtn) {
  return (
    <button
      className={`rounded-full bg-btn-res-color w-24 h-24 flex items-center justify-center text-white text-5xl hover:bg-opacity-60 transition ${props.className}`}
    >
      <a className="text-center "> {props.name} </a>
    </button>
  );
}
