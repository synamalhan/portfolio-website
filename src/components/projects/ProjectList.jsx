import React from 'react';
import ProjectCard from './ProjectCard'; 

import PF1 from "../../assets/projects/PF1.jpeg";
import LPD1 from "../../assets/projects/LPD1.jpeg";
import CG from "../../assets/projects/CG.png";

const projects = [
  {
    title: 'Last Point Distribution Analysis',
    summary: 'Optimized dispatch operations with K-means clustering and real-time cost calculations, improving delivery efficiency.',
    duration: 'May 2024 – July 2024',
    techStack: ['Python', 'Streamlit', 'K-means Clustering', 'Folium'],
    details: (
      <>
        <p><strong>Situation:</strong> The dispatch team faced inefficient routing and unclear clustering of delivery points.</p>
        <p><strong>Problem:</strong> Poorly defined last-mile delivery zones caused high delivery times and costs.</p>
        <p><strong>Action:</strong> I applied K-means clustering to optimize distribution zones, used Folium for geospatial visualizations, and integrated cost calculators in a Streamlit dashboard.</p>
        <p><strong>Result:</strong> Reduced average delivery path overlap and improved logistical efficiency.</p>
        <p><strong>What I Learned:</strong> Real-world clustering application, map-based insights using Folium, and integrating business cost metrics with ML pipelines.</p>
        <p><strong>Tech Stack:</strong> Python, Streamlit, K-means, Folium</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/synamalhan/dispatch_optimization_FG_forecasting' },
      ],
    },
    {
    title: 'Plate Mill FG Forecasting',
    summary: 'Deployed predictive models to forecast finished goods, improving dispatch planning.',
    duration: 'May 2024 – July 2024',
    techStack: ['Python', 'XGBoost', 'ARIMA', 'Prophet', 'Random Forest'],
    images:PF1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/synamalhan/dispatch_optimization_FG_forecasting' },
      ],
    details: (
      <>
        <p><strong>Situation:</strong> Forecasting was done manually, leading to inefficiencies.</p>
        <p><strong>Problem:</strong> Dispatch planning lacked accurate predictive backing.</p>
        <p><strong>Action:</strong> Trained time series models (ARIMA, Prophet) and ensemble methods (XGBoost, RF) to forecast weekly finished goods inventory.</p>
        <p><strong>Result:</strong> Improved forecast accuracy by 30%, enabling better production scheduling.</p>
        <p><strong>What I Learned:</strong> Handling seasonality in time series, comparing predictive model performance, and delivering actionable insights for supply chain teams.</p>
        <p><strong>Tech Stack:</strong> Python, XGBoost, ARIMA, Prophet, Random Forest</p>
      </>
    ),
  },
  {
    title: 'CropGenius',
    summary: 'Developed CropGenius to provide 100% accurate crop recommendations using XGBoost and Random Forest.',
    duration: 'July 2024',
    techStack: ['XGBoost', 'Random Forest', 'Streamlit', 'Weather API'],
    details: (
      <>
        <p><strong>Situation:</strong> Farmers needed region-specific crop recommendations based on soil and weather data.</p>
        <p><strong>Problem:</strong> Traditional recommendation systems lacked accuracy and context.</p>
        <p><strong>Action:</strong> Trained ML models using agri-datasets and weather API data, deployed via Streamlit app.</p>
        <p><strong>Result:</strong> Achieved 100% recommendation accuracy on validation datasets and real use cases.</p>
        <p><strong>What I Learned:</strong> API integration in ML apps, agriculture-specific ML pipelines, and building explainable UIs for domain experts.</p>
        <p><strong>Tech Stack:</strong> XGBoost, Random Forest, Streamlit, Weather API</p>
      </>
    ),
    images:CG,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/synamalhan/ai-crop-optimizer' },
      { label: 'Demo', url: 'https://youtu.be/030IplDlcBU' },],
  },
  {
    title: 'Slab Sizing',
    summary: 'Optimized computer vision algorithms using YOLO, increasing measurement accuracy by 80%.',
    duration: 'June 2024 – Aug 2024',
    techStack: ['Ultralytics', 'YOLO', 'Python', 'FastSAM'],
    details: (
      <>
        <p><strong>Situation:</strong> Manual measurement of steel slabs was time-consuming and inconsistent.</p>
        <p><strong>Problem:</strong> Automated image-based sizing models lacked precision under different lighting and angle conditions.</p>
        <p><strong>Action:</strong> Fine-tuned YOLO and FastSAM models for precise object detection, ran benchmarking tests across multiple conditions.</p>
        <p><strong>Result:</strong> Boosted measurement accuracy by 80% and reduced time-to-insight drastically.</p>
        <p><strong>What I Learned:</strong> Real-world edge cases in CV, model fine-tuning and dataset augmentation techniques for YOLO pipelines.</p>
        <p><strong>Tech Stack:</strong> YOLO, Ultralytics, Python, FastSAM</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
  {
    title: 'Options Pricing and Risk Assessment Tool',
    summary: 'Developed financial tool to calculate option pricing using Monte Carlo simulations and Black-Scholes.',
    duration: 'Dec 2024',
    techStack: ['Python', 'Streamlit', 'Monte Carlo', 'Black-Scholes'],
    details: (
      <>
        <p><strong>Situation:</strong> Finance students and analysts needed a simulation-based learning and risk evaluation tool.</p>
        <p><strong>Problem:</strong> Existing tools were either non-interactive or lacked risk measures.</p>
        <p><strong>Action:</strong> Built a Streamlit dashboard to price options using Monte Carlo & Black-Scholes, added VaR/ES risk metrics.</p>
        <p><strong>Result:</strong> Helped users visualize pricing dynamics and perform scenario-based risk analysis.</p>
        <p><strong>What I Learned:</strong> Applied quantitative finance concepts programmatically and learned to simplify financial modeling for UI/UX.</p>
        <p><strong>Tech Stack:</strong> Python, Monte Carlo, Black-Scholes, Streamlit</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
  {
    title: 'Wildlife Monitoring and Conservation',
    summary: 'Automated detection and monitoring of wildlife using YOLO/Faster R-CNN and SAM/FastSAM for segmentation.',
    duration: 'Dec 2024',
    techStack: ['YOLO', 'Faster R-CNN', 'SAM', 'FastSAM', 'Python'],
    details: (
      <>
        <p><strong>Situation:</strong> Manual tracking of endangered species was inefficient and prone to error.</p>
        <p><strong>Problem:</strong> Needed automated monitoring using satellite and camera trap imagery.</p>
        <p><strong>Action:</strong> Used YOLO/Faster R-CNN for detection, SAM-based models for segmentation, integrated with movement analysis system.</p>
        <p><strong>Result:</strong> Enabled 24/7 monitoring of remote wildlife zones with over 92% accuracy.</p>
        <p><strong>What I Learned:</strong> Model ensemble in CV tasks, wildlife-specific edge cases, importance of scalable ecological solutions.</p>
        <p><strong>Tech Stack:</strong> YOLO, Faster R-CNN, SAM, FastSAM, Python</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
  {
    title: 'Medical Image Analysis for Early Disease Detection',
    summary: 'Developed CNN model to detect anomalies in medical images using U-Net for segmentation.',
    duration: 'Jan 2025',
    techStack: ['TensorFlow', 'Keras', 'U-Net', 'ResNet', 'VGG'],
    details: (
      <>
        <p><strong>Situation:</strong> Early detection of tumors and fractures in radiology scans was inconsistent.</p>
        <p><strong>Problem:</strong> High false negatives in automated diagnosis models.</p>
        <p><strong>Action:</strong> Trained U-Net for segmentation and ResNet/VGG for classification on MRI and X-ray datasets.</p>
        <p><strong>Result:</strong> Reduced false negative rate by 35% while maintaining over 90% precision.</p>
        <p><strong>What I Learned:</strong> Importance of segmentation before classification, medical data preprocessing challenges, and evaluation techniques.</p>
        <p><strong>Tech Stack:</strong> TensorFlow, Keras, U-Net, ResNet, VGG</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
  {
    title: 'Portfolio Analyzer and Stock Prediction Dashboard',
    summary: 'Streamlit app for portfolio management with real-time tracking and ML-driven stock price predictions.',
    duration: 'Dec 2024',
    techStack: ['Python', 'Streamlit', 'Random Forest', 'LSTM', 'Plotly'],
    details: (
      <>
        <p><strong>Situation:</strong> Investors wanted a tool that combined analytics with price forecasting.</p>
        <p><strong>Problem:</strong> Most dashboards lacked predictive capability or usable UI.</p>
        <p><strong>Action:</strong> Built frontend in Streamlit, backend with LSTM/Random Forest models and integrated real-time stock APIs and financial metrics.</p>
        <p><strong>Result:</strong> Delivered daily insights and forecasts with 87% accuracy.</p>
        <p><strong>What I Learned:</strong> End-to-end dashboarding, combining ML forecasts with financial KPIs, user-focused design.</p>
        <p><strong>Tech Stack:</strong> Python, Streamlit, LSTM, Random Forest, Plotly</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
  {
    title: 'OCR Training',
    summary: 'Trained custom OCR models, improving recognition accuracy with Donut model fine-tuning.',
    duration: 'July 2024 – Aug 2024',
    techStack: ['Python', 'Donut Model', 'AWS OCR', 'Azure OCR'],
    details: (
      <>
        <p><strong>Situation:</strong> Existing OCR tools were failing on industry-specific formats like log sheets.</p>
        <p><strong>Problem:</strong> Poor recognition accuracy of critical text fields and symbols.</p>
        <p><strong>Action:</strong> Fine-tuned the Donut transformer-based OCR model, and benchmarked against AWS/Azure OCR APIs.</p>
        <p><strong>Result:</strong> Increased accuracy by over 25% on key form fields.</p>
        <p><strong>What I Learned:</strong> Custom transformer model training, OCR-specific metrics, and evaluation of commercial APIs.</p>
        <p><strong>Tech Stack:</strong> Python, Donut Model, AWS OCR, Azure OCR</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
  {
    title: 'Emotion Detection from Images',
    summary: 'Built emotion detection app using Hugging Face RoBERTa model with real-time Streamlit visualization.',
    duration: 'Dec 2024',
    techStack: ['Hugging Face', 'RoBERTa', 'Streamlit', 'Python'],
    details: (
      <>
        <p><strong>Situation:</strong> Needed a real-time tool to detect and quantify user sentiment during feedback collection.</p>
        <p><strong>Problem:</strong> Emotion detection models lacked real-time interactivity and multi-modal feedback.</p>
        <p><strong>Action:</strong> Used RoBERTa for text emotion classification, added image-based emotion scoring, and built an interactive dashboard in Streamlit.</p>
        <p><strong>Result:</strong> Enabled real-time analysis of user mood and engagement from live sessions.</p>
        <p><strong>What I Learned:</strong> Multi-modal analysis, transformer-based NLP, UX design for real-time interaction.</p>
        <p><strong>Tech Stack:</strong> Hugging Face, RoBERTa, Python, Streamlit</p>
      </>
    ),
    images:LPD1,
    links:[
      { label: 'GitHub Repo', url: 'https://github.com/username/ocean-data-visualizer' },
      { label: 'Live Demo', url: 'https://ocean-visualizer.vercel.app' },],
  },
];


const ProjectList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {projects.map((proj, i) => (
        <div
          key={i}
          style={{
            marginTop: i % 2 === 0 ? 0 : 180,  // Staggered layout like WorkExperienceList
            transition: 'margin-top 0.3s ease',
          }}
        >
          <ProjectCard title={proj.title} description={proj.summary} details={proj.details} image={proj.images} links={proj.links}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
