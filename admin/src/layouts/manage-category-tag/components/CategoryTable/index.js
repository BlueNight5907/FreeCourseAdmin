import PropTypes from "prop-types";
import { Box, Button, Chip, Paper, Stack } from "@mui/material";
import RenderTable from "components/RenderTable";
import React, { useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Visibility, Edit, Delete, VisibilityRounded } from "@mui/icons-material";
import { getRandomItem } from "utils/array-utils";
import colors from "utils/colors";
import Image from "components/Image";
import SoftButton from "components/SoftButton";
import { getAllFeeds } from "services/api/blogAPI";
// import DeleteAction from "../DeleteAction";
import { getAllCategories } from "services/api/categoryAPI";

const CategoryTable = (props) => {
  const columns = [
    {
      headerName: "Tên",
      field: "name",
      width: 200,
      valueGetter: ({ row }) => {
        return row.name;
      },
      flex: 1,
    },
    {
      headerName: "URL",
      field: "urlPath",
      width: 210,
      valueGetter: ({ row }) => {
        return row.urlPath;
      },
      flex: 1,
    },
    {
      headerName: "Hành động",
      field: "action",
      width: 250,
      renderCell: (params) => (
        <Box>
          <Link to={""}>
            <Button
              variant="outlined"
              onClick={() => {
                // setPost(params.row);
              }}
            >
              <VisibilityRounded color="info" size="large" />
            </Button>
            {/* <DeleteAction params={params} /> */}
          </Link>
          {/* <Link to={{ pathname: "/manage-course/edit/" + params.row._id }}>
            <SoftButton style={{ marginLeft: 16 }} variant="contained" startIcon={<Edit />} />
          </Link> */}
          {/* <DeleteAction params={params} /> */}
        </Box>
      ),
    },
  ];
  const getData = async () => {
    const data = await getAllCategories();
    console.log(data);
    return { data, totalRows: data.length };
  };

  return (
    <Stack gap={1} width="100%" height={500}>
      <RenderTable
        params={{ page: 0, page_size: 10 }}
        columns={columns}
        rowIdField="_id"
        rowHeight={100}
        rowsPerPageOptions={[10, 25, 50]}
        getData={getData}
      />
    </Stack>
  );
};

CategoryTable.defaultProps = {
  noGutter: false,
};

CategoryTable.propTypes = {
  row: PropTypes.any,
  noGutter: PropTypes.bool,
};
export default CategoryTable;
