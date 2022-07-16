import PropTypes from "prop-types";
import { Box, Chip, Paper, Stack } from "@mui/material";
import RenderTable from "components/render-table/RenderTable";
// import Wrapper from "components/wrapper/Wrapper";
import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Visibility, Edit } from "@mui/icons-material";
// import Button from "components/button/Button";
// import DeleteAction from "../table-cell/delete-action";
// import { GET_MY_CREATED_COURSES_REQUEST } from "store/types/data-types/manage-course-types";
// import { useDispatch } from "react-redux";
import { getRandomItem } from "utils/array-utils";
import colors from "utils/colors";
import Image from "components/Image";
import SoftButton from "components/SoftButton";

// const ListTag = ({ row }) => {
//   const colorArr = useMemo(
//     () => row.tags?.map((item) => getRandomItem(colors)),
//     [row.tags]
//   );
//   return (
//     <Stack direction="row" gap={0.5}>
//       {row.tags?.map((tag, index) => (
//         <Chip
//           key={index}
//           sx={{ color: "#fff", backgroundColor: colorArr[index] }}
//           label={tag.name}
//         />
//       ))}
//     </Stack>
//   );
// };

const PostTable = () => {
  // const dispatch = useDispatch();
  const columns = [
    {
      headerName: "Tác giả",
      field: "creator",
      width: 300,
      valueGetter: ({ row }) => row.creator?.userInformation?.fullName,
    },
    {
      headerName: "Ảnh nền",
      field: "backgroundUrl",
      width: 210,
      renderCell: ({ row }) => (
        <Image className="aspect-video w-full p-2" src={row.backgroundUrl} />
      ),
    },
    {
      headerName: "Tiêu đề",
      field: "title",
      valueGetter: ({ row }) => row.title,
    },
    {
      headerName: "Mô tả",
      field: "description",
      valueGetter: ({ row }) => row.description,
      editable: true,
    },
    {
      headerName: "Đường dẫn",
      field: "url",
      valueGetter: ({ row }) => row.url,
      editable: true,
    },
    {
      headerName: "Ngày đăng",
      field: "createdAt",
      valueGetter: ({ row }) => row.createdAt,
    },
    {
      headerName: "Lượt thích",
      field: "likes",
      valueGetter: ({ row }) => row.likes?.length,
    },
    {
      headerName: "Hành động",
      field: "action",
      width: 250,
      renderCell: (params) => (
        <Box>
          <Link to={params.row.url}>
            <SoftButton variant="contained">button</SoftButton>
          </Link>
          {/* <Link to={{ pathname: "/manage-course/edit/" + params.row._id }}>
            <SoftButton style={{ marginLeft: 16 }} variant="contained" startIcon={<Edit />} />
          </Link> */}
          {/* <DeleteAction params={params} /> */}
        </Box>
      ),
    },
  ];

  //const getData = useCallback(async () => {
  // const { data, total: totalRows } = await new Promise((resolve, reject) => {
  //   try {
  //     dispatch({
  //       type: GET_MY_CREATED_COURSES_REQUEST,
  //       callback: (data) => resolve(data),
  //     });
  //   } catch (error) {
  //     reject(error);
  //   }
  // });
  // console.log({ data, totalRows });
  // return { data, totalRows };
  //}, [dispatch]);

  return (
    <Stack gap={1} className="h-full">
      <Paper className="grow flex flex-col min-h-[700px] p-1">
        <RenderTable
          params={{ page: 0, page_size: 10 }}
          columns={columns}
          rowIdField="_id"
          rowHeight={100}
          rowsPerPageOptions={[10, 25, 50]}
          // getData={getData}
        />
      </Paper>
    </Stack>
  );
};

PostTable.defaultProps = {
  noGutter: false,
};

PostTable.propTypes = {
  row: PropTypes.any,
  noGutter: PropTypes.bool,
};
export default PostTable;