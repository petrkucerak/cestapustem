export default function PostBody({ content, note, author }) {
    content = content.split("[").join('<em class="chord">');
    content = content.split("]").join("</em>");
    return (
        <div className="max-w-2xl mx-auto">
            <div className="dark:bg-gray-700 bg-gray-200 text-3xl px-4 py-6">
                {author && (
                    <div className="mb-3">
                        <span title="Autor">👤:</span> {author}
                    </div>
                )}
                {note && (
                    <div className="mt-2">
                        <span title="Poznámka">📝:</span> {note}
                    </div>
                )}
            </div>
            <div className="text-xl mt-12 song-text" dangerouslySetInnerHTML={{
                __html: content
            }}></div>
        </div>
    );
}
