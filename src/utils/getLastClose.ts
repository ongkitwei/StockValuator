const getLastClose = async (tickerSymbol: any) => {
  const response = await fetch(
    `http://localhost:4000/api/lastclose/${tickerSymbol}` // Corrected the URL
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.text();
  const lastClosePrice = data ? parseFloat(data) : null; // Ensure it's parsed properly
  console.log(lastClosePrice);
  return lastClosePrice;
};

export default getLastClose;
