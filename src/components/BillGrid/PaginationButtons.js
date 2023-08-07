import {
  Pagination,
  PaginationItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import CancelButton from "../CancelButton/CancelButton";

export default function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  const theme = createTheme({
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          icon: {
            backgroundColor: "#d32f2f",
            border: "none",
            borderRadius: " 4px",
            padding: "6px",
            width: "min-content",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        shape="rounded"
        size="large"
        page={page + 1}
        count={pageCount}
        sx={{ marginTop: "50px" }}
        // @ts-expect-error
        renderItem={(props2) => (
          <PaginationItem
            components={{
              previous: (props) => (
                <button className="btn" {...props}>
                  Претходно
                </button>
              ),
              next: (props) => (
                <button className="btn" {...props}>
                  Следно
                </button>
              ),
            }}
            {...props2}
            disableRipple
          />
        )}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
      <CancelButton />
    </ThemeProvider>
  );
}
