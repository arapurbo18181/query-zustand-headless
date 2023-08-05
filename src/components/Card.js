const Card = ({ title, description, btnText, onBtnClick }) => (
  <div className="bg-white rounded shadow p-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-500">{description}</p>
    <button
      onClick={onBtnClick}
      className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
    >
      {btnText}
    </button>
  </div>
);

export default Card;
