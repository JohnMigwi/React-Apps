import { useState } from 'react';
function Test() {
 const [showTerms, setShowTerms] = useState(false);
 function showTermsSummaryHandler() {
 setShowTerms(true);
 }
 let paragraphText = '';
 if (showTerms) {
 paragraphText = 'By continuing, you accept that we will not indemnify  you for any damage or harm caused by our products.';
 }
 return (
 <section>
 <button onClick={showTermsSummaryHandler}>Show Terms of Use 
Summary</button>
 <p>{paragraphText}</p>
 </section>
 );
}

export default Test;