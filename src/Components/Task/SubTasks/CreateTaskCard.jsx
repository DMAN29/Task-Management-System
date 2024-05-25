import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Padding } from "@mui/icons-material";

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

export default function CreateTaskCard({ handleClose, open }) {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagsChange = (event, value) => {
    setSelectedTags(value);
  };

  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,
    });
  };

  const formatDate = (input) => {
    let {
      $y: year,
      $M: month,
      $D: day,
      $H: hours,
      $m: minutes,
      $s: seconds,
      $ms: milliseconds,
    } = input;
    const date = new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds
    );
    const formattedDate = date.toISOString();
    return formattedDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.tags = selectedTags;
    formData.deadline = formatDate(formData.deadline);
    console.log(formData);
    handleClose();
  };

  return (
    <div>
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
                  value={FormData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Image"
                  fullWidth
                  name="image"
                  value={FormData.image}
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
                  value={FormData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tagList}
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
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
