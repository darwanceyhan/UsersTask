import UserInterface from "../../interface/UserInterface";

interface PaginationProps {
  users: UserInterface[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = (props: PaginationProps) => {
  const ChangePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.setPage(parseInt(e.currentTarget.value));
  };
  const PageCount = Math.ceil(props.users.length / 10);
  return (
    <div className="bg-white p-4 grid place-items-center mt-10">
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <button
              className="rounded h-10 px-5 text-pagination-text transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-pagination-bg hover:opacity-40 text-pagination-arrow"
              onClick={() => props.setPage(props.page - 1)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {Array.from(Array(PageCount), (e, i) => {
            return (
              <li>
                <button
                  className={
                    props.page === i + 1
                      ? "h-10 px-5 text-pagination-text transition-colors duration-150 bg-pagination-bg rounded focus:shadow-outline hover:bg-pagination-bg rounded"
                      : "h-10 px-5 text-pagination-text transition-colors duration-150 bg-white rounded focus:shadow-outline hover:bg-pagination-bg rounded hover:opacity-40"
                  }
                  value={i + 1}
                  onClick={ChangePage}
                >
                  {i + 1}
                </button>
              </li>
            );
          })}
          <li>
            <button
              className="h-10 px-5 text-pagination-text transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-pagination-bg rounded hover:opacity-40 text-pagination-arrow"
              onClick={() => props.setPage(props.page + 1)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
