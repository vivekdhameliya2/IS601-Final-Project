// utils/loadPizzaData.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pizzaDirectory = path.join(process.cwd(), "./markdowns/pizza");
const homeDirectory = path.join(process.cwd(), "./markdowns/home");
const homeCouponDirectory = path.join(process.cwd(), "./markdowns/coupons/homeCoupons");
const testimonialDirectory = path.join(
  process.cwd(),
  "./markdowns/testimonials"
);

export function getAllPizzaData() {
  const fileNames = fs.readdirSync(pizzaDirectory);
  const allPizzaData = fileNames.map((fileName) => {
    const fullPath = path.join(pizzaDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      fileName,
      ...data,
      content,
    };
  });

  return allPizzaData;
}

export function getAllHomeData() {
  const fileNames = fs.readdirSync(homeDirectory);
  const allHomeData = fileNames.map((fileName) => {
    const fullPath = path.join(homeDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      fileName,
      ...data,
      content,
    };
  });
  return allHomeData[0];
}

export function getAllTestimonials() {
  const fileNames = fs.readdirSync(testimonialDirectory);
  const allTestimonials = fileNames.map((fileName) => {
    const fullPath = path.join(testimonialDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      fileName,
      ...data,
      content,
    };
  });

  return allTestimonials;
}

export function getAllHomeCoupons() {
  const fileNames = fs.readdirSync(homeCouponDirectory);
  const allCouponData = fileNames.map((fileName) => {
    const fullPath = path.join(homeCouponDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      fileName,
      ...data,
      content,
    };
  });
  return allCouponData[0];
}
