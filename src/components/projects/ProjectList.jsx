import React from 'react';
import ProjectCard from './ProjectCard'; // You'll create this like WorkExperienceCard
// import optimizer from '../../assets/optimizer.png';
// import analyzer from '../../assets/analyzer.png';
// import prediction from '../../assets/prediction.png';

const projects = [
        {
          title: 'Last Point Distribution Analysis',
          summary: 'Optimized dispatch operations with K-means clustering and real-time cost calculations, improving delivery efficiency.',
          duration: 'May 2024 – July 2024',
          techStack: ['Python', 'Streamlit', 'K-means Clustering', 'Folium'],
          images: [],
          details: (
            <ul>
              <li>Optimized dispatch operations with K-means clustering and real-time cost calculations.</li>
              <li>Enhanced operational insights using Folium and API-driven geospatial analysis.</li>
            </ul>
          ),
        },
        {
          title: 'Plate Mill FG Forecasting',
          summary: 'Deployed predictive models to forecast finished goods, improving dispatch planning.',
          duration: 'May 2024 – July 2024',
          techStack: ['Python', 'XGBoost', 'ARIMA', 'Prophet', 'Random Forest'],
          images: [],
          details: (
            <ul>
              <li>Developed models with XGBoost, ARIMA, Prophet to forecast finished goods.</li>
              <li>Conducted data cleaning, feature engineering, and model evaluation.</li>
            </ul>
          ),
        },
        {
          title: 'CropGenius',
          summary: 'Developed CropGenius to provide 100% accurate crop recommendations using XGBoost and Random Forest.',
          duration: 'July 2024',
          techStack: ['XGBoost Regressor', 'Random Forest Classifier', 'Streamlit', 'Weather API'],
          images: [],
          details: (
            <ul>
              <li>Built crop recommendations model with XGBoost and Random Forest.</li>
              <li>Integrated weather data via API and built user-friendly Streamlit interface.</li>
            </ul>
          ),
        },
        {
          title: 'Slab Sizing',
          summary: 'Optimized computer vision algorithms using YOLO, increasing measurement accuracy by 80%.',
          duration: 'June 2024 – Aug 2024',
          techStack: ['Ultralytics', 'YOLO', 'Python', 'Computer Vision', 'FastSAM', 'Object Detection'],
          images: [],
          details: (
            <ul>
              <li>Improved computer vision algorithms with YOLO and FastSAM.</li>
              <li>Validated system precision and efficiency with extensive testing.</li>
            </ul>
          ),
        },
        {
          title: 'Options Pricing and Risk Assessment Tool',
          summary: 'Developed financial tool to calculate option pricing using Monte Carlo simulations and Black-Scholes.',
          duration: 'Dec 2024',
          techStack: ['Python', 'Streamlit', 'Monte Carlo', 'Black-Scholes'],
          images: [],
          details: (
            <ul>
              <li>Calculated option pricing using Monte Carlo and Black-Scholes models.</li>
              <li>Integrated risk metrics like VaR and ES with visualizations.</li>
            </ul>
          ),
        },
        {
          title: 'Wildlife Monitoring and Conservation',
          summary: 'Automated detection and monitoring of wildlife using YOLO/Faster R-CNN and SAM/FastSAM for segmentation.',
          duration: 'Dec 2024',
          techStack: ['Python', 'TensorFlow', 'PyTorch', 'SAM', 'FastSAM', 'YOLO', 'Faster R-CNN'],
          images: [],
          details: (
            <ul>
              <li>Detected and monitored wildlife with object detection and segmentation models.</li>
              <li>Classified species, tracked movement, and monitored populations.</li>
            </ul>
          ),
        },
        {
          title: 'Medical Image Analysis for Early Disease Detection',
          summary: 'Developed CNN model to detect anomalies in medical images using U-Net for segmentation.',
          duration: 'Jan 2025',
          techStack: ['Python', 'TensorFlow', 'Keras', 'CNNs (ResNet, VGG)', 'U-Net'],
          images: [],
          details: (
            <ul>
              <li>Detected anomalies like tumors and fractures in X-rays, MRIs, CT scans.</li>
              <li>Used U-Net for precise image segmentation and enhanced diagnostic accuracy.</li>
            </ul>
          ),
        },
        {
          title: 'Portfolio Analyzer and Stock Prediction Dashboard',
          summary: 'Streamlit app for portfolio management with real-time tracking and ML-driven stock price predictions.',
          duration: 'Dec 2024',
          techStack: ['Python', 'Streamlit', 'Random Forest', 'LSTM', 'Plotly'],
          images: [],
          details: (
            <ul>
              <li>Built dashboard with portfolio tracking and risk-return analysis.</li>
              <li>Integrated ML models for 7-day stock price forecasting.</li>
            </ul>
          ),
        },
        {
          title: 'OCR Training',
          summary: 'Trained custom OCR models, improving recognition accuracy with Donut model fine-tuning.',
          duration: 'July 2024 – Aug 2024',
          techStack: ['Python', 'Donut Model', 'AWS OCR', 'Azure OCR'],
          images: [],
          details: (
            <ul>
              <li>Fine-tuned open-source Donut OCR model for better accuracy.</li>
              <li>Evaluated AWS and Azure OCR services for validation.</li>
            </ul>
          ),
        },
        {
          title: 'Emotion Detection from Images',
          summary: 'Built emotion detection app using Hugging Face RoBERTa model with real-time Streamlit visualization.',
          duration: 'Dec 2024',
          techStack: ['Hugging Face Transformers', 'Streamlit', 'Python'],
          images: [],
          details: (
            <ul>
              <li>Used RoBERTa-based model to classify emotions from text and images.</li>
              <li>Visualized emotion scores interactively in Streamlit.</li>
            </ul>
          ),
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
          <ProjectCard title={proj.title} description={proj.summary} details={proj.details}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
