"use client";
import { useFormik } from "formik";
import * as yup from "yup";

interface PostFormProps {
  initialValues?: { title: string; body: string };
  onSubmit: (values: { title: string; body: string }) => void;
  submitLabel?: string;
}

const validationSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be 100 characters or less")
    .required("Title is required"),
  body: yup
    .string()
    .min(10, "Body must be at least 10 characters")
    .required("Body is required"),
});

export default function PostForm({
  initialValues = { title: "", body: "" },
  onSubmit,
  submitLabel = "Publish",
}: PostFormProps) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Post Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="Enter your post title..."
          className="w-full px-4 py-3 bg-primary border border-primary-200 rounded-xl text-white placeholder-slate-500 focus:border-btn focus:ring-1 focus:ring-btn outline-none transition"
        />
        {formik.touched.title && formik.errors.title ? (
          <p className="text-red-400 text-sm mt-1">{formik.errors.title}</p>
        ) : null}
      </div>

      {/* Body */}
      <div>
        <label
          htmlFor="body"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Post Content
        </label>
        <textarea
          id="body"
          name="body"
          rows={10}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          placeholder="Write your blog post content..."
          className="w-full px-4 py-3 bg-primary border border-primary-200 rounded-xl text-white placeholder-slate-500 focus:border-btn focus:ring-1 focus:ring-btn outline-none transition resize-y"
        />
        {formik.touched.body && formik.errors.body ? (
          <p className="text-red-400 text-sm mt-1">{formik.errors.body}</p>
        ) : null}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="px-8 py-3 bg-btn text-black font-semibold rounded-xl text-sm hover:opacity-90 transition shadow-sm"
      >
        {submitLabel}
      </button>
    </form>
  );
}
