export default {
  apiBaseURL: process.env.NODE_ENV !== 'development' ? `${window.location.protocol}//${window.location.hostname}/api` : 'http://localhost:3000/api',
  toast: {
    icon: true,
    position: "top-right",
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 5,
    newestOnTop: true,
    timeout: 5000,
    closeOnClick: true
  }
}
