
require('json')
require('Nokogiri')

def map_sound_name(sound_name)
	return sound_name.gsub(/\s/, '').gsub(/\(.*/, '')
end

Dir.glob("spritesheets/*_base.png").each do |filename|
	basename = File.basename(filename, "_base.png")
	output =
	{
		:images => [],
		:sounds => [],
		:frames => [],
		:actions => {}
	}
	index_image = 0
	files = []
	fn = "spritesheets/" + basename + "_color.png"
	files.push(fn) if File.exist?(fn)
	fn = "spritesheets/" + basename + "_base.png"
	files.push(fn) if File.exist?(fn)
	fn = "spritesheets/" + basename + "_shadow.png"
	files.push(fn) if File.exist?(fn)
	files.each do |filename_2|
	#Dir.glob("spritesheets/" + basename + "*.png").each do |filename_2|
	#	next if /.*_hit_area.png/ =~ filename_2
		output[:images].push(File.basename(filename_2))
		i = 0
		File.read(filename_2.sub(/\.png/, '') + ".js").scan(/((?:-?\d+(?:\.\d+)?,){6}-?\d+(?:\.\d+)?)/).each do |str_vec|
			vec = str_vec[0].split(",").map {|s| s.to_i}
			output[:frames][i] ||= {}
			output[:frames][i][:frame] ||= []
			frame = output[:frames][i][:frame].push({})[-1]
			frame[:i] = index_image
			frame[:vx] = vec[0].round
			frame[:vy] = vec[1].round
			frame[:vw] = vec[2].round
			frame[:vh] = vec[3].round
			frame[:x] = vec[5].round
			frame[:y] = vec[6].round
			i += 1
		end
		index_image += 1
	end
	basename.capitalize!
	for i in 0...basename.size()
		if basename[i] == '_'
			basename[i+1] = basename[i+1].upcase
			basename[i] = ""
		end
	end
	filenames = Dir.glob("sprite_data/sprite * (" + basename + ").xml")
	doc = File.open(filenames[0]) { |f| Nokogiri::XML(f) }
	doc.xpath('//*[@name="Label Layer"]').css('DOMFrame').each do |dom_frame|
		b = dom_frame["index"]
		e = (dom_frame["duration"].to_i + b.to_i - 1).to_s
		action = {}
		action[:start] = b.to_i
		action[:end] = e.to_i
		output[:actions][dom_frame["name"]] = action
	end
	doc.xpath('//*[@soundName]').each do |dom_frame|
		sn = map_sound_name(dom_frame["soundName"])
		output[:sounds].push(sn) if !output[:sounds].include?(sn)
	end
	doc.xpath('//*[@soundName]').each do |dom_frame|
		index = dom_frame["index"]
		sn = map_sound_name(dom_frame["soundName"])
		output[:frames][index.to_i][:sound] ||= []
		output[:frames][index.to_i][:sound].push(output[:sounds].index(sn))
	end
	File.open(basename + ".json", 'w') do |file|
		file.write(JSON.pretty_generate(output))
	end
end




