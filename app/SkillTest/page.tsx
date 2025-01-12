'use client';
import React, { useState } from 'react';
import QuickStatistics from '@/components/quickStatistics';
import ComparisonGraph from '@/components/comparisonGraph';
import SyllabusWiseAnalysis from '@/components/syllabusWiseAnalysis';
import QuestionAnalysis from '@/components/questionAnalysis';
import Questions from '@/components/questions';
import UpdateScoresModal from '@/components/updateScores';
import { useStateValue } from '@/Context/StateProvider';

const SkillTestPage: React.FC = () => {    
  const [isModalOpen, setIsModalOpen] = useState(false);  

 const handleUpdateClick = (data: object) => {    
    setIsModalOpen(true); 
  };

  return (
    <div className="container min-w-[84vw] md:w- p-4">
      <UpdateScoresModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <h1 className="text-xl font-bold mb-4">Skill Test</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col  gap-4 w-full md:w-1/2">
          <Questions
            title="Hyper Text Mark Up Language"
            questions={8}
            duration="15 minutes"
            submissionDate="5 June 2021"            
            onUpdate={() => handleUpdateClick({ title: 'Hyper Text Mark Up Language', questions: 8, duration: '15 minutes', submissionDate: '5 June 2021' })}
          />
          <QuickStatistics />
          <ComparisonGraph />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <SyllabusWiseAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
};

export default SkillTestPage;
