// Example Content
import * as tableContent from "../../../../stories/demos/table.content.html";
import * as tableRowSelectionContent from "../../../../stories/demos/table-row-selection.content.html";
import * as tablePagination from "../../../../stories/demos/table-pagination.content.html";
import * as tableProgressIndicator from "../../../../stories/demos/table-progress-indicator.content.html";
import * as tableColumnSorting from "../../../../stories/demos/table-column-sorting.content.html";

export default {
  title: 'Components/Data Table',
  parameters: {
//    layout: "fullscreen",
  }
};

const rows = [
  {
    dessert: 'frozen yogurt',
    carbs: null,
    protein: 4,
    comment: 'Super tasty',
  },
  {
    dessert: 'ice cream',
    carbs: 24,
    protein: null,
    comment: 'Super tasty',
  },
  {
    dessert: 'eclair',
    carbs: 24,
    protein: 4,
    comment: null,
  },
]
export const Basic = ({}) => tableContent;
export const RowSelection = ({}) => tableRowSelectionContent;
export const WithPagination = ({}) => tablePagination;
export const WithColumnSorting = ({}) => tableColumnSorting;
export const ProgressIndicator = ({}) => tableProgressIndicator;
export const EmptyCell = ({}) => {
  return `
    <div class="mdc-data-table" style="display: flex;">
      <div class="mdc-data-table__table-container">
        <table class="mdc-data-table__table" aria-label="Dessert calories">
          <thead>
            <tr class="mdc-data-table__header-row">
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
              <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
              <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
              <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
            </tr>
          </thead>
          <tbody class="mdc-data-table__content">
            ${rows.map(dessert => {
              return `
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row" style=${dessert.dessert ? '' : 'color:grey;'}>${dessert.dessert ?? 'N/A'}</th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric" style=${dessert.carbs ? '' : 'color:grey;'}>${dessert.carbs ?? 'N/A'}</td>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric" style=${dessert.protein ? '' : 'color:grey;'}>${dessert.protein ?? 'N/A'}</td>
                  <td class="mdc-data-table__cell" style=${dessert.comment ? '' : 'color:grey;'}>${dessert.comment ?? 'None'}</td>
                </tr>
              `
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
};
