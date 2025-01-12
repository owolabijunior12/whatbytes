'use client';
import React, { useState } from 'react';
import QuickStatistics from '@/components/quickStatistics';
import ComparisonGraph from '@/components/comparisonGraph';
import SyllabusWiseAnalysis from '@/components/syllabusWiseAnalysis';
import QuestionAnalysis from '@/components/questionAnalysis';
import Questions from '@/components/questions';
import UpdateScoresModal from '@/components/updateScores';

const SkillTestPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scoreData, setScoreData] = useState({});

  const handleUpdateClick = (data: object) => {
    setScoreData(data);
    console.log('Data from Questions component:', data); // Log the data to console
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="container mx-auto p-4">
      <UpdateScoresModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <h1 className="text-xl font-bold mb-4">Skill Test</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <Questions
            title="Hyper Text Mark Up Language"
            questions={8}
            duration="15 minutes"
            submissionDate="5 June 2021"
            open={false}
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
