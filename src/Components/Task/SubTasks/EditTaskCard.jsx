import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksById, updateTask } from "../../../Store/TaskSlice";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditTaskCard({ handleClose, open }) {
  const dispatch = useDispatch();
  const { task } = useSelector((store) => store);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const taskId = param.get("taskId");

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: dayjs(),
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const tagList = [
    "Angular",
    "React",
    "JavaScript",
    "NextJs",
    "VueJs",
    "Spring Boot",
    "Python",
    "Node JS",
  ];

  useEffect(() => {
    if (taskId) dispatch(fetchTasksById(taskId));
  }, [taskId]);

  useEffect(() => {
    if (task.taskDetails) {
      setFormData({
        title: task.taskDetails.title,
        image: task.taskDetails.image,
        description: task.taskDetails.description,
        tags: task.taskDetails.tags,
        deadline: task.taskDetails.deadline
          ? dayjs(task.taskDetails.deadline)
          : dayjs(),
      });
      setSelectedTags(task.taskDetails.tags);
    }
  }, [task.taskDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
    setFormData({ ...formData, tags: value });
  };

  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      tags: selectedTags,
      deadline: formData.deadline.toISOString(),
    };
    dispatch(updateTask({ id: item.id, updatedTaskData: formData }));
    console.log(updatedFormData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Image"
                fullWidth
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="multiple-limit-tags"
                options={tagList}
                value={selectedTags}
                onChange={handleTagsChange}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField label="Tags" fullWidth {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Deadline"
                  className="w-full"
                  value={formData.deadline}
                  onChange={handleDeadlineChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                sx={{ Padding: ".9rem" }}
                className="custom-btn"
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
