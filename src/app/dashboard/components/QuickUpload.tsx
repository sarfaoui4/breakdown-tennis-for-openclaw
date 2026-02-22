// Composant de secours pour QuickUpload
export default function QuickUpload() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Upload Rapide</h3>
      <p className="text-gray-500 mb-4">Version simplifiée pour build initial</p>
      <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all">
        Uploader une vidéo
      </button>
    </div>
  )
}