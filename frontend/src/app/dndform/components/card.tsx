"use client";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BookMarkIcon from "@/app/icons/BookMark";
interface Props {
  todo: string;
}

const CardItem: React.FC<Props> = ({ todo }) => {
  console.log(todo);
  return (
    <li>
      <Card sx={{ minWidth: 100, margin: "5px" }} variant="outlined">
        <span className="kanban-handle cursor-pointer">
          <BookMarkIcon />
        </span>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {todo}
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

export default CardItem;
