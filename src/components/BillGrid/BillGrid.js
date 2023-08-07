import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import data from "../data/data.json";
import { ThemeProvider } from "@emotion/react";
import { Button, createTheme } from "@mui/material";
import CheckboxGrid from "../CheckBox/Checkbox";
import { useSelector } from "react-redux";
import CustomPagination from "./PaginationButtons";
import { useNavigate } from "react-router-dom";

export default function MyDataGrid() {
  const theme = createTheme({
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
              {
                display: "none",
              },
            border: "none",
            //backgroundColor: " #fafbfc",
          },
          cell: {
            border: "none",
            "&:focus": {
              outline: "none",
            },
          },
          row: {
            "&.Mui-selected": {
              backgroundColor: "#f0eded",
              "&:hover": {
                backgroundColor: "#cfcdcc",
              },
            },
            "&:hover": {
              backgroundColor: "#f0eded",
            },
            marginTop: "5px",
            marginBottom: "5px",
          },
          columnHeaderTitle: {
            fontWeight: "bold",
          },
        },
      },
    },
  });
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const select = useSelector((state) => state.meters.meter);
  const user = useSelector((state) => state.userNumber.input);
  const search = data.find(
    (data) => data.smetki != null && data.brojFaktura == user
  );
  console.log(search);
  let rows = [];
  const columns = [
    {
      field: "mernoMesto",
      headerName: "Мерно место",
      width: 200,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "rok",
      headerName: "Рок на плаќање",
      width: 200,
      align: "center",
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "iznos",
      headerName: "Износ на сметка",
      width: 200,
      align: "right",
      headerAlign: "right",
      sortable: false,
    },
  ];

  let denari = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "den",
    currencyDisplay: "name",
    useGrouping: true,
  });
  console.log(denari.format(search.smetki[1].iznos));

  rows = [
    {
      id: 1,
      mernoMesto: select,
      rok: "до " + search.smetki[0].rok,
      iznos: denari.format(search.smetki[0].iznos),
    },
    {
      id: 2,
      mernoMesto: select,
      rok: "до " + search.smetki[1].rok,
      iznos: denari.format(search.smetki[1].iznos),
    },
    {
      id: 3,
      mernoMesto: select,
      rok: "до " + search.smetki[2].rok,
      iznos: denari.format(search?.smetki[2].iznos),
    },
    {
      id: 4,
      mernoMesto: select,
      rok: "до " + search.smetki[3].rok,
      iznos: denari.format(search.smetki[3].iznos),
    },
    {
      id: 5,
      mernoMesto: select,
      rok: "до " + search.smetki[4].rok,
      iznos: denari.format(search.smetki[4].iznos),
    },
    {
      id: 6,
      mernoMesto: select,
      rok: "до " + search.smetki[5].rok,
      iznos: denari.format(search.smetki[5].iznos),
    },
  ];
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    setSelectedRows(selectedRowsData);
  };

  let total = 0;
  for (var i = 0; i < selectedRows.length; i++) {
    var currency = selectedRows[i].iznos;
    total = total + Number(currency.replace(/[^0-9.-]+/g, ""));
    console.log("total", currency);
  }
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/index/payment");
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "460px", width: "100%" }}>
        <DataGrid
          hideFooterRowCount
          hideFooterSelectedRowCount
          disableColumnMenu
          checkboxSelection
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          components={{
            BaseCheckbox: CheckboxGrid,
            Pagination: CustomPagination,
          }}
          headerHeight={0}
          onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
        <h4>Вкупно за плаќање: {denari.format(total)}</h4>
        {selectedRows != 0 && (
          <Button
            sx={{
              backgroundColor: "#d32f2f",
              color: "black",
              width: "max-content",
            }}
            onClick={handleNavigation}
          >
            Плати
          </Button>
        )}
      </div>
    </ThemeProvider>
  );
}
