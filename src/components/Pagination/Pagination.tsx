import React, { memo, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Select from '../forms/select/Select';
import styles from './Pagination.module.scss'

type PaginationProps = {
  page: number,
  perPage: number,
  totalPages: number | null | undefined,
  setPage: Dispatch<SetStateAction<number>>,
  setPerPage: Dispatch<SetStateAction<number>>,
}

const Pagination = ({ page, perPage, totalPages, setPage, setPerPage }: PaginationProps) => {
  const getPageFromIndex = (i: number) => i + 1

  const prevPage = () => {
    page - 1 >= 1 && setPage((p: typeof page) => p - 1);
  }

  const nextPage = () => {
    totalPages && page + 1 <= totalPages && setPage((p: typeof page) => p + 1);
  }

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+e.target.value)
  }

  return (
    <div className={styles.pagination}>
      {totalPages &&
        <>
          <Select
            value={perPage.toString()}
            onChange={handlePerPageChange}
            options={(
              <>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </>
            )} />
          <div className={`${styles.page} ${page === 1 ? styles.disabled : ''}`} onClick={prevPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          {[...Array(totalPages)].map((p, i) => (
            <div
              className={`${styles.page} ${getPageFromIndex(i) === page ? styles.active : ''}`}
              onClick={() => setPage(getPageFromIndex(i))}
              key={getPageFromIndex(i)}>
              {getPageFromIndex(i)}
            </div>
          ))}
          <div className={`${styles.page} ${page >= totalPages ? styles.disabled : ''}`} onClick={nextPage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </>}
    </div>
  )
}

export default memo(Pagination);