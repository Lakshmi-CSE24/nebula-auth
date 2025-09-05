import Swal from "sweetalert2";

export const successAlert = (title, text) => {
  Swal.fire({
    title: `🚀 ${title}`,
    text,
    icon: "success",
    background: "rgba(15, 23, 42, 0.95)", // space dark
    color: "#fff",
    confirmButtonColor: "#6366f1", // indigo
    customClass: {
      popup: "neon-card animate-fadeIn",
    },
  });
};

export const errorAlert = (title, text) => {
  Swal.fire({
    title: `💥 ${title}`,
    text,
    icon: "error",
    background: "rgba(15, 23, 42, 0.95)",
    color: "#fff",
    confirmButtonColor: "#ef4444", // red
    customClass: {
      popup: "neon-card animate-fadeIn",
    },
  });
};
