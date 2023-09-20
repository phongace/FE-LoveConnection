const useHome = () => {
  const handleSession = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'buổi sáng';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'buổi chiều';
    } else {
      return 'buổi tối';
    }
  };

  return {
    handleSession,
  };
};

export default useHome;
