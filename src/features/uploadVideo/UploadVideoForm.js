import { AddVideo, VideoGrey } from '../../components/icons';

function UploadVideoForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-5 border justify-between items-center rounded-xl p-6">
        <AddVideo />
        <p className="text-darkGrey font-medium">
          Click to upload your video here
        </p>
        <input type="file" />
      </div>

      <div>
        <input
          id="video-title"
          type="text"
          className="rounded-xl w-full h-[6.2vh] border-gray-400"
          placeholder="Video Title"
          name="video-title"
        />
      </div>
      <div>
        <select
          id="video-permission"
          className="rounded-xl w-full h-[6.2vh] border-gray-400"
          name="video-permission"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-primary bg-gradient-to-r from-[#DE8443] to-[#B3683C] rounded-xl h-[6vh] text-white"
      >
        Continue
      </button>
    </form>
  );
}

export default UploadVideoForm;
