import { Colors, IPagination } from "../utils/interfaces";
import Button from "./button";
import Select from "./select";


export default function Pagination({ currPage, maxPage, itemsPerPage, allItemsPerPage, handleNumVisiblePages, handlePrevPage, handleNextPage }: Readonly<IPagination>) {
    return (
        <div className="body-pagination-container">
            <p>Página {currPage} de {maxPage}</p>

            <div className="pagination-buttons-container">
                <Button title="Anterior" color={Colors.GRAY} padding="12px 14px" disabled={currPage === 1} onClick={handlePrevPage} />
                <Button title={'' + currPage} color={Colors.PRIMARY} padding="12px 16px" square disabled/>
                <Button title="Seguinte" color={Colors.GRAY} padding="12px 14px" disabled={currPage === maxPage} onClick={handleNextPage}/>
                <Select name="pageSelector" options={allItemsPerPage} value={''+itemsPerPage} color={Colors.GRAY} onChange={handleNumVisiblePages} />
            </div>
        </div>
    );
}
