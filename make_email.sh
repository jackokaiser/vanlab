if [ "$#" -ne 1 ]; then
	echo "Usage: $0 {blog_post_name}"
fi

blog="$1"
url="https://vanderfool.com/post/${blog}.md"

pandoc --standalone --template content/templates/mail_template.html -V url=${url} content/blogs/en_${blog}.md -o content/mails/en_${blog}.html
pandoc --standalone --template content/templates/mail_template.html -V url=${url} content/blogs/fr_${blog}.md -o content/mails/fr_${blog}.html
