export default function QuestionPapers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Previous Question Papers
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 2024-25 Papers */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4">2024-25</h2>
          <div className="space-y-2">
            <a
              href="/files/question-papers/2024-25/sem1"
              className="block text-blue-600 hover:text-blue-800"
            >
              Semester 1
            </a>
            <a
              href="/files/question-papers/2024-25/sem2"
              className="block text-blue-600 hover:text-blue-800"
            >
              Semester 2
            </a>
          </div>
        </div>

        {/* 2023-24 Papers */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4">2023-24</h2>
          <div className="space-y-2">
            <a
              href="/files/question-papers/2023-24/sem1"
              className="block text-blue-600 hover:text-blue-800"
            >
              Semester 1
            </a>
            <a
              href="/files/question-papers/2023-24/sem2"
              className="block text-blue-600 hover:text-blue-800"
            >
              Semester 2
            </a>
          </div>
        </div>

        {/* 2022-23 Papers */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4">2022-23</h2>
          <div className="space-y-2">
            <a
              href="/files/question-papers/2022-23/sem1"
              className="block text-blue-600 hover:text-blue-800"
            >
              Semester 1
            </a>
            <a
              href="/files/question-papers/2022-23/sem2"
              className="block text-blue-600 hover:text-blue-800"
            >
              Semester 2
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-600">
          Note: For access to older question papers, please contact the
          examination department.
        </p>
      </div>
    </div>
  );
}
