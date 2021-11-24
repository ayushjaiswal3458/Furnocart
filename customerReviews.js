const review = document.getElementById("reviewText");
const reviewList = [
  "We’re loving the clean, modern sofa put together by @Furnocart.",
  "Put the frames up. Home studio is 70% done !! ",
  "Weekend is here and can't wait for the little one to hop on the Sofa Bed and start watching her favoritre cartoons :)",
  "Turning my living room into a Zen Paradise!",
  "If work from home is your new normal, let us tell you how to set up your home office desk to keep you motivated and productive.",
  "All for the love of the chair - Genoa wing chair has caused a sort of a coup in my palace and my prince charming has dethroned the mighty king.",
  "My bookshelf... Service was great.. The people who brought in the furniture were polite, courteous and respectful.",
];

var currentIndex = 0;

function setPreviousReview() {
  if (currentIndex == 0) currentIndex = reviewList.length;
  currentIndex--;
  return setReview();
}

function setNextReview() {
  if (currentIndex == reviewList.length - 1) currentIndex = -1;
  currentIndex++;
  return setReview();
}

function setReview() {
  return (review.innerHTML = reviewList[currentIndex]);
}
