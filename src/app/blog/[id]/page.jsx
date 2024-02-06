import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen boarised in the 1960s
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/11619096/pexels-photo-11619096.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}> Aditya Joshi</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/11202308/pexels-photo-11202308.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using Content here
          content here making it look like readable English Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search forlorem ipsum will uncover many web
          sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident,
          <br />
          <br />
          sometimes on purpose(injected humour and the like). Where does it come
          from? Contrary to popular bein a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia
          <br />
          <br />
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature,od and Evil by Cicero, written in 45 BC. This
          book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
          amet.., comes from a line in section 1.10.32. The standard chunk of
          <br />
          <br />
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et
          Malorum by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham. Where can I get t anything embarrassing hidden in the middle
          of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionar
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
