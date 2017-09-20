# hackers
#     |
#     |-- ryan_s
#           |-- README.md
#     |-- jon
#           |-- README.md


require 'pry'
require 'fileutils'

FileUtils.touch('test.txt')

students = ['Ariel', 'Darryl', 'Fiona', 'Hsing', 'Jessica', 'Jon', 'Lyle', 'Pauline', 'Ryan M', 'Ryan S', 'Sidhra', 'Trystan', 'Wendy']

binding.pry

# lowercase each name
# add undercase if needed
# FileUtils.mkdir 'test'
# touch file

# students.each { |x|
#   students = x.downcase.gsub("\s","_")
#   puts students
#  }


students.each do |student|
  folder_name = student.downcase.gsub(/\s+e/, '_')
  FileUtils.mkdir(folder_name)
  FileUtils.cd(folder_name) do
    FileUtils.touch('README.md')
  end
end


#  students.each { |i|
#    FileUtils.mkdir i }
#    # i.touch('README.md')
#
# some_dir.each do |file|
#   # do something
# end

# # BLOCKS
# loop do
#   puts 'forever young'
#   break
# end


# while condition
# end

# for name in hackers do
#   puts name
# end
