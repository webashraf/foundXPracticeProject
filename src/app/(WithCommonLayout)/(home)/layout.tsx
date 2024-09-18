const layout = ({
  children,
  recentPost,
}: {
  children: React.ReactNode;
  recentPost: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {recentPost}
    </>
  );
};

export default layout;
