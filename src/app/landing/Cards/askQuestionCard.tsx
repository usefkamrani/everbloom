import React from "react";

interface AskQuestionProps {
  closeModal?: () => void;
  xl?: boolean;
}
const AskQuestionCard: React.FC<AskQuestionProps> = ({ closeModal, xl }) => {
  return (
    <div className="w-96 h-[60%] xl:w-full xl:h-auto border-1 border-border p-6 rounded-lg shadow-md flex flex-col mt-8">
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-bold mb-4">هنوز سوال داری؟!</h2>
        <p className={`${xl ? "hidden" : "block"}`} onClick={closeModal}>
          ×
        </p>
      </div>

      <p className="mb-6">
        فقط اینجا برامون پیام بذار تا کارشناسان ما{" "}
        <span className="font-semibold">رایگان</span> باهات تماس بگیرن و به
        سوال‌هات جواب بدن.
      </p>

      <form className="flex flex-col grow">
        <input
          type="text"
          placeholder="نام خود را وارد کنید"
          className="w-full p-2 mb-4 border-1 rounded-lg border-border focus:outline-none focus:ring focus:ring-txtSecondary placeholder:text-txtSecondary text-txtPrimary"
        />

        <input
          type="tel"
          placeholder="شماره تلفن خود را وارد کنید"
          className="w-full p-2 mb-4 border-1 rounded-lg border-border focus:outline-none focus:ring focus:ring-txtSecondary placeholder:text-txtSecondary text-txtPrimary"
        />

        <textarea
          placeholder="مشکل یا سوال خود را بنویسید..."
          className="grow w-full p-2 mb-4 border-1 rounded-lg border-border focus:outline-none focus:ring focus:ring-txtSecondary placeholder:text-txtSecondary text-txtPrimary"
        />

        <button
          type="submit"
          className="w-full h-12 p-2 bg-accentSecondary rounded-lg"
        >
          <h2 className="text-bgPrimary text-lg font-semibold">
            ثبت سوال
          </h2>
        </button>
      </form>
    </div>
  );
};

  
  export default AskQuestionCard;